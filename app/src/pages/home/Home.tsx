import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-8">
            <Typography variant="h4" className="text-center">
                Filters V2
            </Typography>
            <div className="flex justify-center gap-8">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/resources')}
                >
                    Resources
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate('/opportunities')}
                >
                    Opportunities
                </Button>
            </div>
        </div>
    );
};

export default Home;
