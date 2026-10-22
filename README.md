# Notebook ruizam.dev

## Desarrollo local

Instala las dependencias con `pnpm install` y arranca el servidor:

```sh
pnpm start
```

Abre [http://localhost:3000](http://localhost:3000). Docusaurus actualiza el
contenido MDX, los estilos CSS y los componentes React al guardar, sin reiniciar
el servidor ni recargar manualmente el navegador.

El comando activa polling cada 1000 ms para detectar cambios incluso cuando las
notificaciones del sistema de archivos no llegan. La actualización usa el HMR
nativo de Docusaurus.

Para comprobarlo, edita un documento en `docs/`, un estilo en
`src/css/custom.css` o un componente en `src/` y guarda el archivo con su página
abierta en el navegador.

`pnpm build` genera el sitio de producción y `pnpm serve` permite previsualizarlo;
para trabajar con HMR usa `pnpm start`.
