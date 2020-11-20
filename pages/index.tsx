import cls from '@5alid/cls';
import { Menu, Transition } from '@headlessui/react';

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto py-8'>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className='px-4 py-1 border rounded font-semibold focus:outline-none'>More</Menu.Button>
            <Transition
              show={open}
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
              className='border max-w-sm p-4 mt-4 rounded absolute'
            >
              <Menu.Items className='grid focus:outline-none'>
                <Menu.Item as='div'>
                  {({ active }) => (
                    <a className={cls('hover:bg-gray-500', [active, 'text-sky-500'])} href='#'>
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a className={`${active && 'bg-blue-500'}`} href='#'>
                      Documentation
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item disabled>
                  <span className='opacity-75'>Invite a friend (coming soon!)</span>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
      <div className='p-4 flex items-center justify-center w-full h-screen'>
        <div className='prose'>
          <h1>Hello world!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, praesentium!</p>
        </div>
      </div>
    </main>
  );
}
