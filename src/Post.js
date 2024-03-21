function Post(props){
    const { author, topic, date, title, text, timing, type } = props;
    return(
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '1120px', height: '310px', borderBottom: '1px solid #000000', padding: '0px 0px 36px 0px', gap: '100px' }}>
            <div id="firstblock" style={{ display: 'flex', flexDirection: 'column', width: '755px', height: '274px', gap: '70px' }}>
              <div id="problematic1" style={{ display: 'flex', flexDirection: 'column', width: '693px', height: '174px', gap: '48px' }}>
                <div style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', display: 'flex', flexDirection: 'row', width: '290px', height: '24px', gap: '4px' }}>
                  <img style={{ objectFit: 'cover', width: '24px', height: '24px', borderRadius: '100px' }} src="" alt="" />
                  <div style={{ color: '#000000', marginTop: '3px', marginBottom: '3px', width: '94px', height: '18px' }}>
                    {props.author}
                  </div>
                  <div style={{ color: '#000000', marginTop: '3px', marginBottom: '3px', width: '12px', height: '18px', opacity: '50%' }}>
                    in
                  </div>
                  <div style={{ color: '#000000', marginTop: '3px', marginBottom: '3px', width: '87px', height: '18px' }}>
                    {props.topic}
                  </div>
                  <div style={{ color: '#000000', marginTop: '3px', marginBottom: '3px', width: '12px', height: '18px' }}>
                    ·
                  </div>
                  <div style={{ color: '#000000', marginTop: '3px', marginBottom: '3px', width: '36px', height: '18px', opacity: '50%' }}>
                    {props.date}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '693px', height: '168px', gap: '24px' }}>
                  <div style={{ fontWeight: '700', fontSize: '28px', lineHeight: '34px', width: '693px', height: '34px' }}>
                    {props.title}
                  </div>
                <div style={{ width: '693px', height: '44px', fontWeight: '400', fontSize: '16px', lineHeight: '22px' }}>
                  {props.text}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '755px', height: '30px', gap: '325px' }}>
              <div style={{ fontWeight: '500', fontSize: '14px', lineHeight: '18px', textAlign: 'center', display: 'flex', flexDirection: 'row', width: '330px', height: '30px', gap: '8px' }}>
                <button style={{ width: '107px', height: '30px', borderRadius: '100px', padding: '6px 16px 6px 16px', gap: '8px', border: '0', backgroundColor: 'lightgray' }}>Java Script</button>
                <div style={{ color: '#000000', marginTop: '6px', marginBottom: '6px', width: '77px', height: '18px', opacity: '50%' }}>
                  {props.timing}
                </div>
                <div style={{ color: '#000000', marginTop: '6px', marginBottom: '6px', width: '12px', height: '18px' }}>
                  ·
                </div>
                <div style={{ color: '#000000', marginTop: '6px', marginBottom: '6px', width: '110px', height: '18px', opacity: '50%' }}>
                  {props.type}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '100px', height: '24px', gap: '14px' }}>
                <div style={{ width: '24px', height: '24px', backgroundColor: '#e1e0e6' }}></div>
                <div style={{ width: '24px', height: '24px', backgroundColor: '#e1e0e6' }}></div>
                <div style={{ width: '24px', height: '24px', backgroundColor: '#e1e0e6' }}></div>
              </div>
            </div>
          </div>
          <img style={{ objectFit: 'cover', width: '260px', height: '265px', borderRadius: '4px' }} src="" alt="" />
        </div>
        </div>
    )
};

export default Post;