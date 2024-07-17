import { Button } from '@nextui-org/button';
import { IconHome } from '@tabler/icons-react';

const HomePage = () => {
  return (
    <div>
      <h1 className="flex h-screen flex-1 flex-col items-center justify-center gap-2">
        <p>Home Page</p>

        <Button color="primary" startContent={<IconHome size={16} />}>
          Press me
        </Button>
      </h1>
    </div>
  );
};

export default HomePage;
