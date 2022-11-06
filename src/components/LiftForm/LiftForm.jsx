import { Grid, Toolbar, Typography, Card, CardContent, CardActions, FormControl, InputLabel, NativeSelect, FormHelperText } from '@mui/material';
import { muiComponents } from '../muiComponentsOverride';
import Button from '../Button/Button';
import styles from './LiftForm.module.css';

const LiftForm = ({handleWorkoutSelect, workoutState, handlePoseEstimation, isPoseEstimation}) => {
    return (
        <Grid item xs className={styles.singleLineContainer}>
            <Toolbar className={styles.singleLine}>
                <FormControl required className={styles.muiForm}>
                    <InputLabel htmlFor="age-native-helper" sx={muiComponents.muiInputLabel}>Movement</InputLabel>
                    <NativeSelect
                        value={workoutState.workout}
                        onChange={(e) => handleWorkoutSelect(e)}
                        inputProps={{ name: 'workout', id: 'age-native-helper', }}
                        sx={{ textAlign: 'center' }}
                    >
                        <option aria-label="None" value="" />
                        <option value={'JUMPING_JACKS'}>Jumping Jacks</option>
                        <option value={'WALL_SIT'}>Wall-Sit</option>
                        <option value={'LUNGES'}>Lunges</option>
                    </NativeSelect>
                    <FormHelperText>Select training data type</FormHelperText>
                </FormControl>
                <Button onClick={() => handlePoseEstimation('COLLECT_DATA')} >{isPoseEstimation ? 'Stop' : 'Collect Data'}</Button>
                <Button>Train Model</Button>
            </Toolbar>
        </Grid>
    );
}

export default LiftForm;