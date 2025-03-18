import { IconFont } from '@/components';
import { Tooltip } from 'antd';

export default function Release() {
  return (
    <Tooltip placement="top" title="版本历史">
      <IconFont type="icon-release" className="text-gray-100 hover:text-white cursor-pointer text-xl my-2" />
    </Tooltip>
  );
}
