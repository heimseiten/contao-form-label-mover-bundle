# Label Mover

Legt die Beschriftung eines Formularfeldes in das Feld selbst und lässt sie beim Ausfüllen an den oberen Rand des Feldes wandern. Aktiviert über die CSS-Klasse move_labels am Formular oder am Modul.

Sobald das Feld den Fokus erhält oder einen Wert enthält, wandert die Beschriftung animiert an den oberen Rand des Feldes und verkleinert sich, bleibt also dauerhaft lesbar. Erfasst werden ein- und mehrzeilige Textfelder sowie Felder für Passwörter; automatisch ausgefüllte, bereits vorbelegte und Felder für ein Datum werden dabei ebenfalls berücksichtigt.

## Anpassen

Über CSS-Variablen:

| Variable | Bedeutung | Standard |
| --- | --- | --- |
| `--form_gap` | Abstand über dem Feld | `10px` |
| `--form_input_padding` | Abstand im Feld | `6px` |
| `--font_color` | Farbe der Beschriftung | `#444` |
