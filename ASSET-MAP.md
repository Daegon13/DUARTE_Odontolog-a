# DUARTE_Odontología — mapa de assets

Copiar la carpeta `assets/` en la raíz del repositorio.

## Rutas PNG compatibles con el prompt ya enviado a Codex

| Uso | Ruta exacta | Alt recomendado |
|---|---|---|
| Hero | `assets/images/duarte/hero-dra-clara-duarte.png` | `Imagen conceptual de una profesional odontológica en consultorio` |
| Perfil profesional | `assets/images/duarte/retrato-dra-clara-duarte.png` | `Retrato conceptual de una profesional odontológica` |
| Consulta adulta | `assets/images/duarte/consulta-odontologica-adulta.png` | `Consulta odontológica personalizada` |
| Atención infantil/adulta | `assets/images/duarte/consulta-madre-e-hija.png` | `Atención odontológica infantil y adulta` |
| Recepción / cierre | `assets/images/duarte/recepcion-consultorio-duarte.png` | `Recepción moderna del consultorio odontológico` |
| Explicación / proceso | `assets/images/duarte/explicacion-modelo-dental.png` | `Explicación odontológica con modelo dental` |

## WebP optimizados incluidos

Se incluyen también versiones `.webp` con el mismo nombre base. Son opcionales y no rompen el PR actual, que fue especificado con rutas `.png`.

Ejemplo de mejora futura:

```html
<picture>
  <source srcset="assets/images/duarte/hero-dra-clara-duarte.webp" type="image/webp">
  <img src="assets/images/duarte/hero-dra-clara-duarte.png"
       alt="Imagen conceptual de una profesional odontológica en consultorio"
       fetchpriority="high">
</picture>
```

Para las imágenes que no sean el hero, usar `loading="lazy"` y `decoding="async"`.
