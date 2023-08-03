'use client';

import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import ModalForm from './modal-form';

const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={onClose}>
      <div className="space-y-4 py-2 pb-4">
        <ModalForm onCancel={onClose} />
      </div>
    </Modal>
  );
};

export default StoreModal;
