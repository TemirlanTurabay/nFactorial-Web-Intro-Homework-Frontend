function Footer(){
    return(
      <div className="lower" style={{ width: '1440px', height: '918px', padding: '778px 160px 32px 160px', gap: '32px', display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
        <div className="lower1" style={{ width: '608px', height: '38px', gap: '105px' }}>
          <div className="lower11" style={{ width: '584px', height: '18px', opacity: '50%', fontWeight: '500', fontSize: '14px', lineHeight: '18px', textAlign: 'center' }}>
            Credits: photos from Unsplash.com, icons from Icons8, graphics from craftwork.design.
          </div>
        </div>
        <div className="lower2" style={{ width: '272px', height: '38px', gap: '16px' }}>
          <div className="lower21" style={{ width: '248px', height: '18px', fontWeight: '500', fontSize: '14px', lineHeight: '18px', textAlign: 'center' }}>
            Made with ✨❤️ at nFactorial in 2022.
          </div>
        </div>
      </div>
    )
};

export default Footer;