interface LayoutSectionProps {
  title: string;
  icon: React.ReactNode;
}

const LayoutSection: React.FC<LayoutSectionProps> = ({ title, icon }) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='flex items-center justify-center text-4xl text-white bg-primary rounded-full w-16 h-16'>
        {icon}
      </div>
      <div className='w-full h-10 border-b-4 border-primary text-3xl text-heading-primary font-semibold'>
        {title}
      </div>
    </div>
  );
};

export default LayoutSection;
