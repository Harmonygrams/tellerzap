import { FileText, PackageSearch, BookText } from 'lucide-react'
import ActionLink from './components/action-link';
import { ActionLinkProps } from './components/action-link';
import { Hero } from './components/hero';
import { SetupCard } from './components/setup-card';
const actions: ActionLinkProps[] = [
  {
    title: 'Invoice',
    icon: <FileText className='text-white'/>,
    description: 'Create invoice',
    color: 'bg-green-500',
    link: '/invoice'
  },
  {
    title: 'Quotation',
    icon: <BookText className='text-white'/>,
    description: 'Create quotation',
    color: 'bg-blue-500',
    link: '/quotation'
  },
  {
    title: 'Products',
    icon: <PackageSearch className='text-white'/>,
    description: 'Manage products',
    color: 'bg-purple-500',
    link: '/products'
  }
];
interface QuickSetup {
  id : string; 
  percentage : number; 
  name : string; 
  description : string; 
  link : string;
}
const setups:QuickSetup[] = [
  {
    id : 'fdfdfdfgfgf', 
    name : "Company", 
    description : "Fill in company information", 
    percentage : 10,
    link : "/company"
  },
  {
    id : 'fojodjfd', 
    name : "Payments Details", 
    description : "Setup payment details", 
    percentage : 40,
    link : "/payment-details"
  },
  {
    id : 'fojodofdofjfd', 
    name : "Invoice terms", 
    description : "Specify your terms", 
    percentage : 0,
    link : "/invoice"
  }
]
export default function Home() {
  return (
    <div className='max-w-[1200px] mx-auto w-[95%]'>
      {/* Hero Section */}
      <Hero />
      {/* Setups  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-5 md:grid-cols-3 gap-4'>
        {setups.map(setup => 
          <SetupCard percentage={setup.percentage} name = {setup.name} key={setup.id} description={setup.description} link={setup.link}/>
        )}
      </div>
      {/* List of actions  */}
      <section className='flex gap-4 justify-center flex-wrap mt-5'>
        {actions.map((action, index) => (
          <ActionLink key={index} {...action} /> 
        ))}
      </section>
    </div>
  );
}
