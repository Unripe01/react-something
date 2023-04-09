import React, { useState } from "react"

function MyModal() {
  const [show, setShow] = useState(false)
  const openModal = () => {
    setShow(true)
  }

  return (
    <div>
      <button onClick={openModal}>Click</button>
      <Modal show={show} setShow={setShow} title="タイトル">
        <p>子要素</p>
      </Modal>
    </div>
  )
}

interface ModalProps {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
  children?: React.ReactNode
}

function Modal({ show, setShow, title, children }: ModalProps) {
  // モーダルを閉じる処理
  const closeModal = () => {
    setShow(false)
  }

  if (!show) return null
  return (
    <div id="overlay" onClick={closeModal}>
      <div id="content" onClick={(e) => e.stopPropagation()}>
        <p>{title}</p>
        {children}
        <p>
          <button onClick={() => setShow(false)}>close</button>
        </p>
      </div>
    </div>
  )
}

export default MyModal
