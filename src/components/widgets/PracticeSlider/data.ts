// src/components/widgets/PracticeSlider/data.ts
import React from 'react';

// Этот интерфейс теперь будет использоваться в нескольких местах
export interface PracticeCase {
  id: number;
  title: string;
  subtitle: string;
  mainContent: React.ReactNode;
  resultText: string;
}