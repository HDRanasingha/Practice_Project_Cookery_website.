import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import Footer from "scenes/footer";

const courses = [
  {
    id: 1,
    title: "Cook and Life",
    description: "Learn the basics of React including components, hooks, and more.",
    image: "../assets/course1.jpg",
  },
  {
    id: 2,
    title: "Lara with Cake day",
    description: "Deep dive into Node.js concepts, building APIs, and backend services.",
    image: "../assets/course2.jpeg",
  },
  {
    id: 3,
    title: "Cook and practice",
    description: "Master JavaScript with advanced topics and best practices.",
    image: "../assets/course3.jpeg",
  },
];

const CoursesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on the search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCourseClick = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <Box>
      {/* Navbar with search functionality */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main content with courses */}
      <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap="2rem" p="2rem">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            sx={{ maxWidth: 300, cursor: "pointer" }}
            onClick={() => handleCourseClick(course.id)}
          >
            <CardMedia component="img" height="140" image={course.image} alt={course.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
            </CardContent>
            <Button
              sx={{ margin: "1rem", backgroundColor: "primary.main" }}
              variant="contained"
              onClick={() => handleCourseClick(course.id)}
            >
              View Course
            </Button>
          </Card>
        ))}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default CoursesPage;
