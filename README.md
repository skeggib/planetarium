# planetarium

Planetarium est une micro-librairie permettant de créer un système solaire animé en HTML.

## Utilisation

Include le css, le javascript et jQuery dans la page HTML :
```
<link rel="stylesheet" type="text/css" href="planetarium/planetarium.css">
<script src="planetarium/planetarium.js"></script>
<script src="jquery.js"></script>
```

Définir un div de class "solar-system" :
```
<div class="solar-system">
```

Ajouter des planetes dans ce div :
```
<div class="planete" id="mercury" 
	data-planetarium-size="1" 
	data-planetarium-distance="7" 
	data-planetarium-rotation-time="0.87"
	data-planetarium-color="#444"
>
</div>
```