import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { Button } from "../Button";

export const Timer: React.FC = () => {
    const [time, setTime] = useState(0); // Tiempo en milisegundos
    const [isRunning, setIsRunning] = useState(false); // Controla si está activo
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const formatTime = (time: number) => {
        const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
        const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
        const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`;
    };

    const handleStart = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1000);
            }, 1000);
        }
    }

    const handlePause = () => {
        if (isRunning && intervalRef.current) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
        }
      };
    
    const handleFinish = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setIsRunning(false);
        setTime(0);
    };
    

    return(
        <Card>
            <CardTimer>
                { formatTime(time) }
            </CardTimer>
            <CardBody>
                <Button onClick={ handleStart }>Iniciar</Button>
                <Button onClick={ handlePause }>Pausar</Button>
                <Button onClick={ handleFinish }>Finalizar</Button>
            </CardBody>
        </Card>
    );
}

const Card = styled.div`
    width: 30%;
    margin: auto;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    background-color: #FAFAFA;
    box-shadow: 1px 1px 20px #B6B6B6A5;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`

const CardTimer = styled.div`
    font-size: 5rem;
    text-align: center;
    padding: 50px 10px
`

const CardBody = styled.div`
    display: flex;
    gap: 25px;
    padding: 10px;
    justify-content: center;
`