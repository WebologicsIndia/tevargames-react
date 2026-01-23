'use client';

const ProviderCard = ({ icon }: { icon: string }) => {
  return (
    <div className="bg-white rounded-xl flex items-center justify-center">
      <img src={icon} className="w-full max-h-full object-contain" alt="provider" />
    </div>
  );
};

export default ProviderCard;
