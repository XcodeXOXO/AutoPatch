{{/*
Return the name of the chart.
*/}}
{{- define "todo-app.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Return the fully qualified app name.
*/}}
{{- define "todo-app.fullname" -}}
{{- printf "%s-%s" (include "todo-app.name" .) .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Return the chart name and version as used in labels.
*/}}
{{- define "todo-app.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}