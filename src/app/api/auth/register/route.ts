import { NextResponse } from 'next/server';
import { registerUser } from '@/core/usecases';
import { mockAuthAdapter } from '@/infra/auth/mock-auth-adapter';
import { RegisterCredentialsSchema } from '@/core/domain';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const validated = RegisterCredentialsSchema.parse(body);

    // Call use case
    const user = await registerUser(validated, mockAuthAdapter);

    return NextResponse.json(
      {
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}


