import { LeftOutlined } from '@ant-design/icons';
import Feedback from './Feedback';

export default function Header() {
  return (
    <div className="h-14 flex justify-between items-center p-4">
      <div className="flex items-center">
        <LeftOutlined className="cursor-pointer text-lg font-extrabold" />
        <h4 className="text-base my-2 ml-4 font-medium">
          供电故障自诊断及故障预测
        </h4>
      </div>
      <div className="flex items-center">
        <Feedback />
      </div>
    </div>
  );
}
