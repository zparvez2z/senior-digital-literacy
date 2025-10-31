import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  duration: number; // minutes
  completed: boolean;
  progress: number; // 0-100
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  completed: boolean;
  progress: number; // 0-100
}

export interface LearningState {
  modules: Module[];
  currentLesson: string | null;
  currentModule: string | null;
  totalProgress: number; // 0-100
  completedLessons: string[];
  timeSpent: number; // minutes
  isLoading: boolean;
  error: string | null;
}

const initialState: LearningState = {
  modules: [],
  currentLesson: null,
  currentModule: null,
  totalProgress: 0,
  completedLessons: [],
  timeSpent: 0,
  isLoading: false,
  error: null,
};

const learningSlice = createSlice({
  name: 'learning',
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },
    setCurrentLesson: (state, action: PayloadAction<string | null>) => {
      state.currentLesson = action.payload;
    },
    setCurrentModule: (state, action: PayloadAction<string | null>) => {
      state.currentModule = action.payload;
    },
    updateLessonProgress: (
      state,
      action: PayloadAction<{ lessonId: string; progress: number }>
    ) => {
      const { lessonId, progress } = action.payload;
      state.modules = state.modules.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) =>
          lesson.id === lessonId ? { ...lesson, progress } : lesson
        ),
      }));
    },
    completeLesson: (state, action: PayloadAction<string>) => {
      const lessonId = action.payload;
      if (!state.completedLessons.includes(lessonId)) {
        state.completedLessons.push(lessonId);
      }
      state.modules = state.modules.map((module) => ({
        ...module,
        lessons: module.lessons.map((lesson) =>
          lesson.id === lessonId
            ? { ...lesson, completed: true, progress: 100 }
            : lesson
        ),
      }));
    },
    addTimeSpent: (state, action: PayloadAction<number>) => {
      state.timeSpent += action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setModules,
  setCurrentLesson,
  setCurrentModule,
  updateLessonProgress,
  completeLesson,
  addTimeSpent,
  setLoading,
  setError,
} = learningSlice.actions;

export default learningSlice.reducer;
