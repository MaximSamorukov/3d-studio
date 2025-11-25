import { EMOJI_LABELS } from '@/widgets/CRMDashboard/Table/model';
import { get } from 'lodash';
import React from 'react';

type ColumnLabelProps = {
  type: string;
  label: string;
  isMobile: boolean;
};
export const ColumnLabel: React.FC<ColumnLabelProps> = ({
  type,
  label,
  isMobile,
}) => {
  if (isMobile) {
    return <>{get(EMOJI_LABELS, type, label)}</>;
  }
  return <>{label}</>;
};
