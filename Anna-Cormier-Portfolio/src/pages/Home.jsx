import img from '../assets/img/sunflower.jpg';

export default function MyProject() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ alignItems:'center', justifyContent:'center'}}>
                <h1>ANNA CORMIER</h1>
                <p>FULL STACK WEB DEVELOPER</p>
            </div>

            <div style={{ position: 'absolute', bottom: 0, right: 0, height: '630px', width: '800px' }}>
                <img
                    src={img}
                    alt='Abstract Image'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
        </div>
    );
}

