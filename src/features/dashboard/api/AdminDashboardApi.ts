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
        activeCount: 45,
        revenue: 90000000
      },
      {
        planName: 'Premium',
        activeCount: 75,
        revenue: 360000000
      }
    ]
  },
  enrollments: {
    completionRate: 68
  },
  topCourses: [
    {
      courseId: 1,
      courseName: 'Lập trình Python cơ bản',
      enrollmentCount: 450,
      completionRate: 72
    },
    {
      courseId: 2,
      courseName: 'Robotics cho người mới bắt đầu',
      enrollmentCount: 380,
      completionRate: 65
    },
    {
      courseId: 3,
      courseName: 'AI và Machine Learning',
      enrollmentCount: 320,
      completionRate: 58
    }
  ],
  topOrganizations: [
    {
      organizationId: 1,
      organizationName: 'Trường THPT Chuyên Lê Hồng Phong',
      studentCount: 850,
      activeSubscription: 'Premium'
    },
    {
      organizationId: 2,
      organizationName: 'Trường THCS Nguyễn Du',
      studentCount: 620,
      activeSubscription: 'Basic'
    },
    {
      organizationId: 3,
      organizationName: 'Trung tâm STEM Việt Nam',
      studentCount: 540,
      activeSubscription: 'Premium'
    }
  ],
  periodComparison: {
    revenueGrowth: 15.5,
    organizationGrowth: 8.2,
    studentGrowth: 12.3
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