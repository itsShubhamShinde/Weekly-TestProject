import './App.css';
import Comp1mob from './Component/Comp1mob';
import Comp2chair from './Component/Comp2chair';
import Comp3brand from './Component/Comp3brand';
import Header from './Component/Header';
import Rewaed from './Component/Rewaed';
import logo from './Images/logo.webp';
import mob from './Images/MobileImg.PNG';
import brandlogo from './Images/brands-logo.png';
import bgchair from './Images/deserve-more-bg.webp'
import bgmonymat from './Images/money-matters-bg.webp'
import bgdog from './Images/security-bg.webp'
import Comp4slider from './Component/Comp4slider';
import displaymob1 from './Images/neopop-fold1.webp'
import displaymob2 from './Images/neopop-fold2.webp'
import displaymob3 from './Images/neopop-fold3.webp'
import displaymob4 from './Images/neopop-fold4.webp'
import Comp5story from './Component/Comp5story';


function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Rewaed />
      <Comp1mob mob={mob} />
      <Comp2chair
        hedding={"feel special more often."}
        subhed={"exclusive rewards for paying your bills"}
        pra={"every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good."}
        btg={"Explore rewards"}
        bgchair={bgchair}
      />
      <Comp3brand brandlogo={brandlogo} />
      <Comp2chair
        hedding={"we take your money matters seriously."}
        subhed={"so that you don’t have to."}
        pra={"never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always."}
        btg={"Experience the upgrade"}
        bgchair={bgmonymat}
      />
      <Comp4slider
        display={displaymob1}
        slideh1={"we’ve got your back."}
        slidePara={"gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time."}
      />
      <Comp4slider
        display={displaymob2}
        slideh1={"begin your winning streak."}
        slidePara={"use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck."}
      />
      <Comp4slider
        display={displaymob3}
        slideh1={"for your eclectic taste."}
        slidePara={"get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of."}
      />
      <Comp4slider
        display={displaymob4}
        slideh1={"more cash in your pockets."}
        slidePara={"switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord."}
      />
      <div className='EmptyDiv'></div>
      <Comp2chair
        hedding={"security first. and second."}
        subhed={"what’s yours remains only yours."}
        pra={"CRED ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any."}
        btg={"Become a member"}
        bgchair={bgdog}
      />
      <Comp5story 
      h1={"the story of CRED begins with trust."}
      p1={"trust as a virtue has consistently played an essential role in every great human achievement. and consistently, its importance has been overlooked. not just by individuals, but by entire societies. we felt it was time someone gave it the spotlight it deserves. especially for the ones who live by this virtue: the trustworthy."}
      p2={"so we thought of creating a system that rewards its members for doing good and being trustworthy. this way, trust as a virtue becomes something to aspire to, just the way it should be. then we went one step ahead: we built it. we know we are on the right track because here you are."}
      p3={"if you make it to CRED, congratulations and welcome. we have a lot of things planned for you."}
      />


    </div>
  );
}

export default App;
