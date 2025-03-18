import { HistoryOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export default function ChatHistory() {
  return (
    <Tooltip placement="top" title="聊天记录">
      <HistoryOutlined className="text-gray-100 hover:text-white cursor-pointer text-xl my-2" />
    </Tooltip>
  );
}
