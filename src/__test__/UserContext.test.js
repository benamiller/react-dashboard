/**
 * @jest-environment jsdom
 */
import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import Header from '../../components/layout/Header';
import { UserContext } '../../context/UserContext';
