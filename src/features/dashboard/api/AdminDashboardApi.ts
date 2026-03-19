import { ApiSuccessResponse } from './../../../types/baseModel';
import { createApi } from '@reduxjs/toolkit/query/react'
import { customFetchBaseQueryWithErrorHandling } from '@/libs/redux/baseApi'
import { SystemDashboardQueryParams, SystemDashboardData } from '../types/systemDashboard.type'

// Mock data tạm thời cho dashboard
const mockDashboardData: SystemDashboardData = {
  summary: {
    totalOrganizations: 150,
    activeOrganizations: 120,
    totalStudents: 5420,
    totalTeachers: 342,
    totalClassrooms: 486,
    totalCertificates: 2150,
    overallPassRate: 78.5,
    totalEnrollments: 8350
  },
  subscriptions: {
    totalSubscriptions: 150,
    activeSubscriptions: 120,
    expiredSubscriptions: 30,
    totalRevenue: 450000000,
    byPlan: [
      {
        planName: 'Basic',
        count: 45,
        activeCount: 45,
        revenue: 90000000
      },
      {
        planName: 'Premium',
        count: 75,
        activeCount: 75,
        revenue: 360000000
      }
    ]
  },
  enrollments: {
    totalEnrollments: 8350,
    completedEnrollments: 5678,
    inProgressEnrollments: 2672,
    enrollmentsByMonth: [],
    completionRate: 68
  },
  topCourses: [
    {
      courseId: 1,
      courseCode: 'PY101',
      courseName: 'Lập trình Python cơ bản',
      totalEnrollments: 450,
      completionRate: 72,
      averageScore: 85.5,
      totalClassrooms: 12
    },
    {
      courseId: 2,
      courseCode: 'ROB101',
      courseName: 'Robotics cho người mới bắt đầu',
      totalEnrollments: 380,
      completionRate: 65,
      averageScore: 78.3,
      totalClassrooms: 10
    },
    {
      courseId: 3,
      courseCode: 'AI201',
      courseName: 'AI và Machine Learning',
      totalEnrollments: 320,
      completionRate: 58,
      averageScore: 82.1,
      totalClassrooms: 8
    }
  ],
  topOrganizations: [
    {
      organizationId: 1,
      organizationName: 'Trường THPT Chuyên Lê Hồng Phong',
      totalStudents: 850,
      totalEnrollments: 1250,
      passRate: 85.2,
      activeSubscriptions: 2
    },
    {
      organizationId: 2,
      organizationName: 'Trường THCS Nguyễn Du',
      totalStudents: 620,
      totalEnrollments: 890,
      passRate: 76.8,
      activeSubscriptions: 1
    },
    {
      organizationId: 3,
      organizationName: 'Trung tâm STEM Việt Nam',
      totalStudents: 540,
      totalEnrollments: 780,
      passRate: 88.5,
      activeSubscriptions: 2
    }
  ],
  periodComparison: {
    revenueGrowth: 15.5,
    organizationGrowth: 8.2,
    studentGrowth: 12.3,
    enrollmentGrowth: 18.7
  }
}

export const systemDashboardApi = createApi({
  reducerPath: 'systemDashboardApi',
  baseQuery: customFetchBaseQueryWithErrorHandling,
  tagTypes: ['SystemDashboard'],
  endpoints: (builder) => ({
    getSystemDashboard: builder.query<ApiSuccessResponse<SystemDashboardData>, SystemDashboardQueryParams>({
      queryFn: async (params) => {
        // Tạm thời trả về mock data thay vì gọi API
        // TODO: Uncomment dòng dưới khi backend đã implement API /api/admin/dashboard
        /*
        return customFetchBaseQueryWithErrorHandling({
          url: '/api/admin/dashboard',
          method: 'GET',
          params: params
        })
        */
        
        // Mock response với delay để giống API thật
        await new Promise(resolve => setTimeout(resolve, 500))
        
        return {
          data: {
            data: mockDashboardData,
            message: 'Success',
            success: true
          }
        }
      },
      providesTags: ['SystemDashboard']
    })
  })
})

export const { useGetSystemDashboardQuery } = systemDashboardApi