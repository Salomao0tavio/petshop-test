# Use a imagem base do SDK .NET para compilar a aplicação
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copie os arquivos do projeto para o contêiner
COPY ["petshop_API.csproj", "./"]
RUN dotnet restore "petshop_API.csproj"

# Copie o restante dos arquivos e compile o projeto
COPY . .
WORKDIR /src

RUN dotnet publish -c Release -o /app/publish

RUN dotnet tool install --global dotnet-ef
ENV PATH="$PATH:/root/.dotnet/tools"

CMD dotnet ef database update && dotnet /app/publish/petshop_API.dll
