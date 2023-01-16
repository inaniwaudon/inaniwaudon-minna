import React, { ReactNode } from 'react';
import styles from './CustomList.module.scss';

interface CustomListProps {
  children: ReactNode;
}

const CustomList = ({ children }: CustomListProps) => <li className={styles.List}>{children}</li>;
export default CustomList;
