import Button from '../Button'
import './styles.scss'

function Join() {
    return (
        <>
            <div className="left">
                {/* <img
                    src='/assets/img/member/join.jpg'
                    className='image'
                    alt='join'
                /> */}
            </div>
            <div
                className="right"
            >
                <div className='join-right'>
                    <p className='join-right-title'>
                    What is the story?
                    </p>
                    <p className='join-right-desc'>
                    On a random day a person went to a Jungle Safari for fun & unfortunately he fall from the Safari (car/jeep) while traveling in jungles, then he saw 3333 tigers which were lost in the metaverse & now they have to survive in this metaverse, which requires friends & a good team. The journey of the lost tigers is going to be the most craziest journey ever.
                    </p>
                    <div className='join-right-btns'>
                        <div>
                          <a href='https://discord.gg/junglesafari' target='_blank'><Button text={'JOIN OUR DISCORD'} /></a>
                        </div>
                        {/* <div>
                        <Button text={'MORE DETAILS'} />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Join;