import { fetchData} from '../utils/ExerciseApi';
import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton, 
  Button,
  CardMedia
} from "@mui/material";
import { Save, Search } from "@mui/icons-material";
import Header from "../component/Header";

const Test = ()=>{
  const [search , setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [saved, setSaved] = useState([]);
  const handleSearch= async ()=>{
    const exercisesData = await fetchData(`https://exercisedb-api.vercel.app/api/v1/exercises/filter` , search);
    console.log(exercisesData);
   
     setResults(exercisesData["data"])
  }
  const handleSave = (exercise) => {
    if (!saved.find((item) => item.id === exercise.id)) {
      setSaved((prev) => [...prev, exercise]);
    }
  };
  
  return (
      <Box sx={{ background: "#14161a", minHeight: "100vh", p: 2 }}>
        <Header text={"Workout Exercises"} />
  
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <TextField
            label="Search workout with "
            variant="outlined"
            size="small"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <IconButton
            onClick={handleSearch}
            sx={{ backgroundColor: "#1976d2", color: "white" }}
          >
            <Search />
          </IconButton>
        </Box>
  
        {results.map((exercise) => (
          <Card key={exercise.id} sx={{ mb: 2, borderRadius: 2 }}>
            <CardContent>
              <CardMedia
               component="img"
               image={exercise.gifUrl}
               alt={exercise.name}
               sx={{ borderRadius: 2, mb: 2 }}
             />
              <Typography fontWeight={600}>{exercise.name}</Typography>
              <Typography variant="body2">Body Part: {exercise.bodyParts}</Typography>
              <Typography variant="body2">Target: {exercise.targetMuscles}</Typography>
              <Button
                variant="text"
                size="small"
                endIcon={<Save />}
                onClick={() => handleSave(exercise)}
                sx={{ mt: 1 }}
              >
                Save
              </Button>
            </CardContent>
                      </Card>
        ))}
  
        {saved.length > 0 && (
          <Box mt={4}>
            <Typography variant="h6" color="white" mb={2}>
              My Saved Workouts
            </Typography>
            {saved.map((exercise) => (
              <Card key={exercise.id} sx={{ mb: 2, borderRadius: 2 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    image={exercise.gifUrl}
                    alt={exercise.name}
                    sx={{ borderRadius: 2, mb: 2 }}
                  />
                  <Typography fontWeight={600}>{exercise.name}</Typography>
                  <Typography variant="body2">Body Part: {exercise.bodyParts}</Typography>
                  <Typography variant="body2">Target: {exercise.targetMuscles}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    );

}

export default Test;