import Link from 'next/link';

export interface ActionLinkProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  link: string;
}

export default function ActionLink({ title, icon, description, color, link }: ActionLinkProps) {
  return (
    <Link href={link} className='flex flex-col items-center gap-2 cursor-pointer group text-center'>
      <div className='relative w-[50px] h-[50px]'>
        <div
          className={`${color} rounded-full w-[48px] h-[48px] group-hover:w-[50px] group-hover:h-[50px] absolute top-0 left-0 flex justify-center items-center pointer-events-none transition-all duration-200 text-white`}
        >
          {icon}
        </div>
      </div>
      <div>
        <p className='font-semibold'>{title}</p>
        <p className='text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
          {description}
        </p>
      </div>
    </Link>
  );
}
