import Header from '@/components/section/header/Header';
import PlastikooEduc from '@/components/sectionCommunity/PlastikooEduc';
import Accueil from "@/components/sectionCommunity/accueil"; 

const CommunityPage = () => {
    return (
        <div>
            <Header />
            <Accueil />
            <PlastikooEduc />
        </div>
    );
};

export default CommunityPage;
