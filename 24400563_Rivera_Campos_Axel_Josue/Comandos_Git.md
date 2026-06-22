# Comandos de Git

| No | Comando | Descripcion | Ejemplo de caso de uso |
| -- | ------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | `git init`| Inicializa un nuevo repositorio Git en la carpeta actual.| Crear un proyecto nuevo y empezar a versionarlo desde cero. Ejemplo: `git init` en una carpeta vacia.|
| 2 | `git clone <url>`| Descarga un repositorio remoto en el equipo.| Copiar un proyecto de GitHub u otro como GitLab para revisarlo o modificarlo localmente. Ejemplo: `git clone https://github.com/usuario/x.git`. |
|3| `git status`| Muestra el estado actual del repositorio y los cambios pendientes.| Revisar que archivos fueron modificados antes de hacer un commit. Ejemplo: `git status` para ver archivos modificados.|
|4| `git add <archivo>`| Agrega archivos al area de preparacion para el siguiente commit.| Preparar un archivo especifico antes de guardar cambios. Ejemplo: `git add index.html`.|
|5| `git restore <archivo>`| Restaura un archivo y descarta cambios locales no confirmados.| Revertir un archivo al ultimo estado guardado. Ejemplo: `git restore index.html` para deshacer cambios locales.|
|6| `git commit -m "mensaje"`| Guarda los cambios preparados con un mensaje.| Registrar una funcion nueva con una descripcion corta y clara. Ejemplo: `git commit -m "Agrega formulario de contacto"`.|
|7| `git log`| Muestra el historial de commits del repositorio.| Revisar cambios anteriores y quien los realizo. Ejemplo: `git log` para ver el historial.|
|8| `git diff`| Compara cambios entre archivos, commits o el area de preparacion.| Ver exactamente que lineas se modificaron antes de confirmar. Ejemplo: `git diff` para revisar diferencias.|
|9| `git branch`| Lista, crea o elimina ramas segun los parametros usados.| Ver las ramas disponibles antes de empezar una nueva tarea. Ejemplo: `git branch` para listar ramas.|
|10| `git branch <nombre>`| Crea una nueva rama local.| Crear una rama para desarrollar una nueva funcionalidad. Ejemplo: `git branch feature-login`.|
|11| `git checkout <rama>`| Cambia de una rama a otra o restaura archivos segun el uso.| Pasar a una rama de pruebas para continuar el trabajo. Ejemplo: `git checkout develop`.|
|12| `git switch <rama>`| Cambia de rama de forma mas clara y moderna que `checkout`.| Ir a la rama principal sin usar comandos mas complejos. Ejemplo: `git switch main`.|
|13| `git merge <rama>`| Integra los cambios de una rama dentro de la rama actual.| Unir una rama de funcionalidades con `main`. Ejemplo: `git merge feature-login`.|
|14| `git pull`| Descarga y combina cambios del repositorio remoto en la rama actual.| Actualizar tu copia local antes de seguir programando. Ejemplo: `git pull origin main`.|
|15| `git push`| Sube tus commits locales al repositorio remoto.| Publicar el trabajo terminado en GitHub, GitLab u otro. Ejemplo: `git push origin main`.|
|16| `git remote -v`| Muestra los repositorios remotos configurados.| Verificar a que servidor esta vinculado el proyecto. Ejemplo: `git remote -v`.|
|17| `git fetch`| Descarga cambios del remoto sin mezclarlos con tu rama actual.| Revisar actualizaciones del equipo sin afectar tu trabajo local. Ejemplo: `git fetch origin`.|
|18| `git reset <archivo>`| Saca un archivo del area de preparacion.| Quitar un archivo que agregaste por error antes del commit. Ejemplo: `git reset index.html`.|
|19| `git revert <commit>`| Crea un nuevo commit que deshace cambios de un commit anterior.| Deshacer una version defectuosa sin perder historial. Ejemplo: `git revert a1b2c3d`.|
|20| `git stash`| Guarda temporalmente cambios sin hacer commit.| Cambiar de tarea rapidamente sin perder trabajo en progreso. Ejemplo: `git stash` antes de cambiar de rama.|
