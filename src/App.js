import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareerPage";
import PlacementPage from "./pages/PlacementPage";
import StudentWorkGalleryPage from "./pages/StudentWorkGalleryPage";
import VfxCourse from "./pages/VfxCourse";
import VfxCourseSaravanampatti from "./pages/VfxCourseSaravanampatti";
import AnimationCourseCoimbatore from "./pages/AnimationCourseCoimbatore";
import AnimationCourseSaravanampatti from "./pages/AnimationCourseSaravanampatti";
import UiUxCourseSaravanampatti from "./pages/UiUxCourseSaravanampatti";
import UiuxCourseCoimbatore from "./pages/UiuxCourseCoimbatore";
import UiuxCourseMalumichampatti from "./pages/UiUxCourseMalumichampatti";
import VideoEditingCourseCoimbatore from "./pages/VideoEditingCourseCoimbatore";
import VideoEditingCourseSaravanampatti from "./pages/VideoEditingCourseSaravanampatti";
import VideoEditingCourseTambaram from "./pages/VideoEditingCourseTambaram";
import VideoEditingCourseMalumichampatti from "./pages/VideoEditingCourseMalumichampatti";
import SapCourseCoimbatore from "./pages/SapCourseCoimbatore";
import SapCourseSaravanampatti from "./pages/SapCourseSaravanampatti";
import ArchitectureCourseSaravanampatti from "./pages/ArchitectureCourseSaravanampatti";
import ArvrCourseCoimbatore from "./pages/ArvrCourseCoimbatore";
import BimCourseSaravanampatti from "./pages/BimCourseSaravanampatti";
import CivilDesignCourseSaravanampatti from "./pages/CivilDesignCourseSaravanampatti";
import GameDevelopmentCourseCoimbatore from "./pages/GameDevelopmentCourseCoimbatore";
import GraphicDesignCourseCoimbatore from "./pages/GraphicDesignCourseCoimbatore";
import GraphicDesignCourseSaravanampatti from "./pages/GraphicDesignCourseSaravanampatti";
import InteriorDesignCourseCoimbatore from "./pages/InteriorDesignCourseCoimbatore";
import InteriorDesignCourseSaravanampatti from "./pages/InteriorDesignCourseSravanampatti";
import DigitalMarketingCourseCoimbatore from "./pages/DigitalMarketingCourseCoimbatore";
import DigitalMarketingCourseMalumichampatti from "./pages/DigitalMarketingCourseMalumichampatti";
import ItTrainingCourseCoimbatore from "./pages/ItTrainingCourseCoimbatore";
import JewelleryCaddDesignCourseCoimbatore from "./pages/JewelleryCaddDesignCourseCoimbatore";
import JewelleryCaddDesignCourseSaravanampatti from "./pages/JewelleryCaddDesignCourseSaravanampatti";
import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/placement" element={<PlacementPage />} />
        <Route path="/student-work-page" element={<StudentWorkGalleryPage />} />
        <Route path="/vfx-course" element={<VfxCourse />} />
        <Route
          path="/vfx-course-in-saravanampatti"
          element={<VfxCourseSaravanampatti />}
        />
        <Route
          path="/animation-course-in-coimbatore"
          element={<AnimationCourseCoimbatore />}
        />
        <Route
          path="/animation-course-in-saravanampatti"
          element={<AnimationCourseSaravanampatti />}
        />
        <Route
          path="/ui-ux-design-course-in-coimbatore"
          element={<UiuxCourseCoimbatore />}
        />
        <Route
          path="/ui-ux-design-course-in-saravanampatti"
          element={<UiUxCourseSaravanampatti />}
        />
        <Route
          path="/ui-ux-design-course-in-malumichampatti"
          element={<UiuxCourseMalumichampatti />}
        />
        <Route
          path="/video-editing-course-in-coimbatore"
          element={<VideoEditingCourseCoimbatore />}
        />
        <Route
          path="/video-editing-course-in-saravanampatti"
          element={<VideoEditingCourseSaravanampatti />}
        />
        <Route
          path="/video-editing-course-in-tambaram"
          element={<VideoEditingCourseTambaram />}
        />

        <Route
          path="/video-editing-course-in-malumichampatti"
          element={<VideoEditingCourseMalumichampatti />}
        />

        <Route
          path="/sap-course-in-coimbatore"
          element={<SapCourseCoimbatore />}
        />
        <Route
          path="/sap-course-in-saravanampatti"
          element={<SapCourseSaravanampatti />}
        />

        <Route
          path="/architecture-course-in-saravanampatti"
          element={<ArchitectureCourseSaravanampatti />}
        />
        <Route
          path="/interior-design-course-in-coimbatore"
          element={<InteriorDesignCourseCoimbatore />}
        />
        <Route
          path="/interior-design-course-in-saravanampatti"
          element={<InteriorDesignCourseSaravanampatti />}
        />
        <Route
          path="/civil-design-course-in-saravanampatti"
          element={<CivilDesignCourseSaravanampatti />}
        />
        <Route
          path="/bim-course-in-saravanampatti"
          element={<BimCourseSaravanampatti />}
        />

        <Route
          path="/ar-vr-course-in-coimbatore"
          element={<ArvrCourseCoimbatore />}
        />
        <Route
          path="/game-development-course-in-coimbatore"
          element={<GameDevelopmentCourseCoimbatore />}
        />
        <Route
          path="/digital-marketing-course-in-coimbatore"
          element={<DigitalMarketingCourseCoimbatore />}
        />

        <Route
          path="/digital-marketing-course-in-malumichampatti"
          element={<DigitalMarketingCourseMalumichampatti />}
        />

        <Route
          path="/graphic-design-course-in-coimbatore"
          element={<GraphicDesignCourseCoimbatore />}
        />
        <Route
          path="/graphic-design-course-in-saravanampatti"
          element={<GraphicDesignCourseSaravanampatti />}
        />
        <Route
          path="/it-training-institute-in-coimbatore"
          element={<ItTrainingCourseCoimbatore />}
        />
        <Route
          path="/jewellery-cad-design-course-in-coimbatore"
          element={<JewelleryCaddDesignCourseCoimbatore />}
        />
        <Route
          path="/jewellery-cad-design-course-in-saravanampatti"
          element={<JewelleryCaddDesignCourseSaravanampatti />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
