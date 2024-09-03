import HeaderCommunity from '@/components/sectionCommunity/HeaderCommunity';
import PlastikooEduc from '@/components/sectionCommunity/PlastikooEduc';
import Accueil from "@/components/sectionCommunity/accueil"; 

const CommunityPage = () => {
    return (
        <div>
            <HeaderCommunity />
            <Accueil />
            <PlastikooEduc />
        </div>
    );
};

export default CommunityPage;
