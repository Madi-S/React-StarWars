import { useSpring, animated } from 'react-spring'


const Loader = () => {
    const styles = useSpring({
        loop: { reverse: true },
        from: { rotateZ: 0, x: -80 },
        to: { rotateZ: 180, x: 80 }
    })

    return (
        <animated.div
            style={{
                width: 80,
                height: 80,
                backgroundColor: '#ffff57',
                borderRadius: '50%',
                margin: '0 auto',
                ...styles
            }}
        />
    )
}

export default Loader
