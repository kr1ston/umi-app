import { FormOutlined } from '@ant-design/icons';

export default function Feedback() {
  return (
    <div className="flex items-center py-2 px-3 border rounded-2xl border-gray-200 cursor-pointer">
      <FormOutlined />
      <span className="ml-2 text-sm">反馈</span>
    </div>
  );
}
