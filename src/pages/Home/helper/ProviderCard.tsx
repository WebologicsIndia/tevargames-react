const ProviderCard = ({ icon }: { icon: string }) => {
    return (
        <div className="bg-white rounded-xl flex items-center justify-center h-16">
            <img src={icon} className="h-8 object-contain" />
        </div>
    );
};

export default ProviderCard;
