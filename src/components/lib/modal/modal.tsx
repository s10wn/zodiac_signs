import { Dialog } from "@headlessui/react";
import cn from "classnames";

import CloseIcon from "@/assets/clear-icon.svg?react";

import styles from "./modal.module.css";

import type { ReactNode } from "react";

type ModalProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export const Modal = ({ title, subtitle, children, isOpen, onClose, className }: ModalProps) => (
  <Dialog className={cn("appLightTheme", className, styles.modal)} open={isOpen} onClose={onClose}>
    <div className={styles.overlay} aria-hidden />
    <div className={styles.panelContainer}>
      <Dialog.Panel className={styles.panel}>
        <div className={styles.modalHeader}>
          <div className={styles.upperHeader}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
            <div className={styles.modalClose}>
              <CloseIcon className={styles.closeIcon} onClick={onClose} />
            </div>
          </div>
          <Dialog.Description>{subtitle}</Dialog.Description>
        </div>
        {children}
      </Dialog.Panel>
    </div>
  </Dialog>
);
