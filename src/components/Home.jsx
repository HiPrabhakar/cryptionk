import logo from "./../assets/logo.svg"
import icon3 from "./../assets/icon-3.png"
import layer6 from "./../assets/layer-6.png"



const Home = () => {
    return (
        <>
            <div className="flex row justify-between mx-16 sm:mx-4">
                <div className="h-[34px] w-[270px]">
                   <img src={logo} alt="" srcset="" />
                </div>
                <div claseName="h-[48px] w-[171px]">
                    <div 
                    style={{background:'linear-gradient(90deg, #8C3035 0%, #D17561 100%)', color:'white'}} 
                    className="flex row justify-between mx-5">
                   <img src={icon3} alt="" srcset="" className="h-10 w-10" />
                       
                        <div>Newsletter</div>
                    </div>
                </div>
            </div>
            <div className="flex row justify-between mx-10 px-10 mb-2">


            <div className="items-center">
  {/* Header Section */}
  <div
    style={{
      fontFamily: 'Inter',
      fontSize: '56px',
      fontWeight: 600,
      lineHeight: '67.77px',
      textAlign: 'left',
      textUnderlinePosition: 'from-font',
      textDecorationSkipInk: 'none',
      width: '591px',
      height: '204px',
      marginTop: '228px',
      marginLeft: '100px',
      color: '#ffff',
     
    }}
  >
    A whole world of crypto, in one simple account
  </div>

  {/* Paragraph Section */}
  <div
    style={{
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '30.33px',
      textAlign: 'left',
      textUnderlinePosition: 'from-font',
      textDecorationSkipInk: 'none',
      width: '516px',
      height: '90px',
      marginTop: '150px',
      marginLeft: '100px',
      color: '#ffff',
     
    }}
  >
    <p>
      Now it’s easy to do more with crypto. Buy with a card, sell in a snap, and see your wallets in one place. It's all
      there in your MoonPay account.
    </p>
  </div>

  {/* Conclusion Section */}
  <div
  style={{width: '125px',
    height: '30px',
    marginTop: '50px',
    marginLeft: '164px',
    color: '#ffff',
    }}>

        
TrustScore 4.2
  </div>
</div>




                <div>
                
                    <div className=" items-center">
                        <div className="bg-[#1c1b1b] text-white rounded-[2rem] h-[25rem] w-[25rem] flex flex-col gap-5 items-center">
                            
                            <div className="">

                            Exchange Rates
                            </div>
                            <div className="mx-auto w-[20rem] bg-[#0d2c0e] p-5">ETH</div>
                            <div className="mx-auto w-[2rem] bg-[#0d2c0e] py-5 px-[auto] text-center rounded-xl">11</div>
                            <div className="mx-auto w-[20rem] bg-[#0d2c0e] p-5">BTC</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[25rem] right-[28rem] z-[-10]">
                <img src={layer6} alt="" className="h-16 w-16" />
            </div>
        </>
    )
}

export default Home;