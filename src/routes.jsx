import { NativeRouter as Router, Route, Routes as RoutesContainer } from "react-router-native";
import Layout from "./components/layout";
import DayWorkout from "./screens/day-workout";
import Categories from "./screens/categories";
import ExercisesCategory from "./screens/exercises-category";
import Exercise from "./screens/exercise";
import Calendar from "./screens/calendar";
import Statistics from "./screens/statistics";

const Routes = () =>
    <Router>
        <Layout>
            <RoutesContainer>
                <Route path="/" element={<DayWorkout/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/categories/:categoryName/exercises" element={<ExercisesCategory/>}/>
                <Route path="/exercises/:exerciseName" element={<Exercise/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
            </RoutesContainer>
        </Layout>
    </Router>

export default Routes;