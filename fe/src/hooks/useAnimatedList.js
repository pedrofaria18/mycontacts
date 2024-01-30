import { useCallback, useState } from 'react';

export default function useAnimatedList() {
  const [items, setItems] = useState([]);
  const [pendingRemovalItemsIds, setPendingRemovalItemIds] = useState([]);

  const handleRemoveItem = useCallback((id) => {
    setPendingRemovalItemIds((prevState) => [...prevState, id]);
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
    setPendingRemovalItemIds((prevState) => prevState.filter((itemId) => itemId !== id));
  }, []);

  const renderList = useCallback((renderItem) => items.map(renderItem), [items]);

  return {
    items,
    setItems,
    pendingRemovalItemsIds,
    handleRemoveItem,
    handleAnimationEnd,
    renderList,
  };
}
