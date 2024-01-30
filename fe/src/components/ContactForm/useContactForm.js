import { useEffect, useImperativeHandle, useState } from 'react';
import useSafeAsyncState from '../../hooks/useSafeAsyncState';
import CategoriesService from '../../services/CategoriesService';
import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';
import useErros from '../../hooks/useErrors';

export default function useContactForm(
  ref,
  onSubmit,
) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useSafeAsyncState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    errors, getErrorMessageByFieldName, removeError, setError,
  } = useErros();

  const isFormValid = name && errors.length === 0;

  useImperativeHandle(ref, () => ({
    setFieldsValues: (contact) => {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setPhone(formatPhone(contact.phone ?? ''));
      setCategoryId(contact.category.id ?? '');
    },
    resetFields: () => {
      setName('');
      setEmail('');
      setPhone('');
      setCategoryId('');
    },
  }), []);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, [
    setCategories,
    setIsLoadingCategories,
  ]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório.',
      });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({
        field: 'email',
        message: 'E-mail inválido.',
      });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone,
      categoryId,
    });

    setIsSubmitting(false);
  }

  return {
    handleSubmit,
    getErrorMessageByFieldName,
    name,
    handleNameChange,
    isSubmitting,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    isLoadingCategories,
    categoryId,
    setCategoryId,
    categories,
    isFormValid,
  };
}
