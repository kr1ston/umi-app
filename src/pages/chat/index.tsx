import { PlusOutlined } from '@ant-design/icons';
import { ProChat } from '@ant-design/pro-chat';
import { Button } from 'antd';
import './index.scss';
import { MockResponse } from './streamResponse';

export default function ChatPage() {
  return (
    <div className="h-full w-3/4 mx-auto">
      <ProChat
        helloMessage={'你好，有问题找小极！'}
        request={async (messages) => {
          const msg = messages[messages.length - 1]?.content || '';
          const mockedData: string = msg as string;

          const mockResponse = new MockResponse(mockedData, 50);

          return mockResponse.getResponse();
        }}
        userMeta={{
          avatar:
            'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          title: '用户',
        }}
        assistantMeta={{
          avatar: 'https://www.extremevision.com.cn/favicon.ico',
          title: '小极',
        }}
        className="h-full custom-chat"
        showTitle
        actions={{
          render: (defaultDoms) => {
            return [
              <Button
                key="new-chat"
                type="default"
                className="!bg-green-500 hover:!bg-green-500 hover:!text-white active:!bg-green-500 !text-white"
                icon={<PlusOutlined />}
              >
                新建对话
              </Button>,
              ...defaultDoms,
            ];
          },
          flexConfig: {
            gap: 24,
            direction: 'horizontal',
            justify: 'space-between',
          },
        }}
      />
    </div>
  );
}
