import { Modal } from "antd"
import React from "react"
import { ModalProps } from "@/Types/ModalTypes"

const ModalWrapper = ({ setModalOpen, modalOpen, children }: ModalProps) => {
  return (
    <Modal
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      footer={null}
      centered={true}
      closeIcon={null}
      destroyOnClose={true}
    >
      <div className={`flex justify-center modal-content rounded-lg overflow-auto bg-transparent`}>
        {children}
      </div>
    </Modal >
  )
}


export default ModalWrapper