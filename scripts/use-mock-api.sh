#!/bin/bash

# Script to quickly switch to mock API mode

echo "🔄 Switching to Mock API mode..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local..."
    cat > .env.local << 'EOF'
# API Configuration - MOCK MODE
NEXT_PUBLIC_USE_MOCK_API=true
NEXT_PUBLIC_API_URL=https://api.arawaney.com

# NextAuth (required)
NEXTAUTH_SECRET=generated-secret-key-for-development-only
NEXTAUTH_URL=http://localhost:3000
EOF
    echo "✅ Created .env.local with mock mode enabled"
else
    # Update existing file
    if grep -q "NEXT_PUBLIC_USE_MOCK_API" .env.local; then
        # Replace existing line
        sed -i.bak 's/^NEXT_PUBLIC_USE_MOCK_API=.*/NEXT_PUBLIC_USE_MOCK_API=true/' .env.local
        echo "✅ Updated NEXT_PUBLIC_USE_MOCK_API to true"
    else
        # Add new line
        echo "" >> .env.local
        echo "# API Configuration - MOCK MODE" >> .env.local
        echo "NEXT_PUBLIC_USE_MOCK_API=true" >> .env.local
        echo "✅ Added NEXT_PUBLIC_USE_MOCK_API=true to .env.local"
    fi
fi

echo ""
echo "🎉 Mock API mode enabled!"
echo ""
echo "📋 You can now login with:"
echo "   Email: demo@example.com"
echo "   Password: Demo1234"
echo ""
echo "🔄 Please restart your development server:"
echo "   1. Stop current server (Ctrl+C)"
echo "   2. Run: bun dev (or pnpm dev / npm run dev)"
echo ""
echo "💡 To switch back to real API later:"
echo "   Set NEXT_PUBLIC_USE_MOCK_API=false in .env.local"


