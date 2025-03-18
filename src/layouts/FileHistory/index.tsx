import { IconFont } from '@/components';
import { Tooltip } from 'antd';

export default function FileHistory() {
  return (
    <Tooltip placement="top" title="文件历史">
      <IconFont type="icon-fileHistory" className="text-gray-100 hover:text-white cursor-pointer text-xl my-2" />
    </Tooltip>
  );
}
