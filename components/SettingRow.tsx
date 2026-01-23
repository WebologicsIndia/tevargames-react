'use client';

import { RightOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

const SettingRow = ({ icon, label }: { icon: ReactNode; label: string }) => {
  return (
    <div
      className="flex items-center justify-between py-[.333333rem]"
      style={{ borderBottom: '1px solid var(--text_color_L3)' }}
    >
      <div className="flex items-center gap-[0.24rem] text-yellow-400 text-[0.4733rem]">
        {icon}
        <span style={{ color: 'var(--van-checkbox-label-color)' }}>{label}</span>
      </div>
      <RightOutlined className="text-gray-500" />
    </div>
  );
};

export default SettingRow;
