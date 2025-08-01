# Effuse Labs Development Environment Setup
Write-Host "Setting up Effuse Labs development environment..." -ForegroundColor Green

# Add Node.js and npm to PATH for this session
$env:PATH = "C:\Users\jerem\AppData\Roaming\npm;C:\Program Files\nodejs;" + $env:PATH

# Verify installations
Write-Host "`nChecking installations:" -ForegroundColor Yellow
Write-Host "Node.js version: " -NoNewline
node --version
Write-Host "npm version: " -NoNewline  
npm --version

Write-Host "`nDevelopment environment ready!" -ForegroundColor Green
Write-Host "You can now run: npm run dev" -ForegroundColor Cyan

# Optional: Start development server
$start = Read-Host "`nStart development server now? (y/n)"
if ($start -eq "y" -or $start -eq "Y") {
    Write-Host "Starting Next.js development server..." -ForegroundColor Green
    Write-Host "Your site will be available at: http://localhost:3000" -ForegroundColor Cyan
    npm run dev
}